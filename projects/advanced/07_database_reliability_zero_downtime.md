---
title: Database Reliability & Zero-Downtime Operations
description: Implement database high availability, backup strategies, zero-downtime migrations, and operational reliability practices
tags: [advanced, database, reliability, postgresql, zero-downtime, devops]
---

## Learning Objectives

- Implement database high availability with replication and automatic failover
- Design and execute zero-downtime schema migrations
- Build and validate backup and recovery procedures with defined RTO and RPO
- Monitor database performance and implement proactive capacity management
- Operate stateful workloads on Kubernetes with production-grade reliability

## Requirements

You are required to operate a production-grade database on your platform with full reliability practices:

1. **High Availability Setup**
   - Deploy PostgreSQL with high availability using one of:
     - **CloudNative-PG operator** (recommended for Kubernetes)
     - **Patroni** with etcd for leader election
     - **AWS RDS Multi-AZ** or equivalent managed service
   - Configure:
     - Primary + 2 replicas minimum
     - Automatic failover: primary failure must trigger promotion in < 30 seconds
     - Synchronous replication for at least one replica (zero data loss on failover)
     - Read replicas for read-heavy queries
   - Test failover:
     - Kill the primary Pod or instance
     - Measure time to automatic promotion
     - Verify application continues serving requests during failover
     - Document RTO achieved vs. target

2. **Backup and Recovery**
   - Implement a multi-layer backup strategy:
     - Continuous WAL archiving to object storage (S3/GCS) - point-in-time recovery
     - Daily full backups with Velero or pg_basebackup
     - Weekly backup to a different region or cloud provider
   - Define and document:
     - RPO target: maximum acceptable data loss (e.g., 5 minutes)
     - RTO target: maximum acceptable recovery time (e.g., 30 minutes)
   - Execute a full disaster recovery drill:
     - Delete the entire database cluster and all local backups
     - Restore from backup to a target point in time
     - Verify data integrity after restore
     - Measure actual RPO and RTO achieved vs. targets
     - Document every command used - this becomes the DR runbook

3. **Zero-Downtime Schema Migrations**
   - Implement a migration strategy using the expand-contract pattern:
     - **Expand**: add new columns/tables as nullable, deploy new code that writes to both old and new schema
     - **Migrate**: backfill existing data in batches (never migrate millions of rows in one transaction)
     - **Contract**: remove old columns/tables only after verifying no code reads them
   - Use a migration tool: Flyway, Liquibase, or Alembic
   - Demonstrate three types of zero-downtime migrations:
     - Adding a nullable column to a large table
     - Renaming a column (expand-contract with a view as bridge)
     - Adding an index on a large table (`CREATE INDEX CONCURRENTLY`)
   - Integrate migrations into the CI/CD pipeline:
     - Migrations run automatically before deployment
     - Failed migrations halt the deployment
     - Rollback is automated for failed migrations

4. **Database Observability**
   - Deploy the PostgreSQL Prometheus exporter
   - Create a Grafana dashboard tracking:
     - Connection pool utilization (PgBouncer or application pool)
     - Query latency: p50, p95, p99
     - Cache hit ratio (target > 99%)
     - Replication lag (alert if > 10 seconds)
     - Lock wait events
     - Bloat on tables and indexes
   - Configure alerts for:
     - Connection pool > 80% utilized
     - Replication lag > 30 seconds
     - Long-running queries > 5 minutes
     - Disk usage > 70%

5. **Connection Management and Performance**
   - Deploy PgBouncer as a connection pooler in front of PostgreSQL
   - Configure pooling mode: `transaction` for most services, `session` where required
   - Demonstrate the impact: compare application latency with and without the pool
   - Identify and optimize the top 3 slowest queries using `pg_stat_statements`:
     - Use `EXPLAIN ANALYZE` to understand query plans
     - Add appropriate indexes
     - Rewrite inefficient queries if needed
   - Document query optimization process and performance improvement measured

### Stretch Goals

- Implement logical replication between PostgreSQL versions for zero-downtime major version upgrades
- Configure pglogical for selective table replication to a read analytics replica
- Implement database chaos: inject network partitions between primary and replica and verify behavior

### Deliverables

- HA PostgreSQL deployment with automatic failover demonstrated and timed
- Backup configuration with WAL archiving and a completed DR drill with RPO/RTO measurements
- Three zero-downtime migration examples with CI/CD integration
- Grafana database dashboard with all required metrics
- PgBouncer configuration with before/after performance comparison
- Query optimization report with `EXPLAIN ANALYZE` output and improvement measurements

### References

**Books**
- [Database Reliability Engineering - Laine Campbell & Charity Majors](https://www.oreilly.com/library/view/database-reliability-engineering/9781491925935/)
- [PostgreSQL: Up and Running - Regina Obe & Leo Hsu](https://www.oreilly.com/library/view/postgresql-up-and/9781492057659/)
- [High Performance PostgreSQL for Rails - Andrew Atkinson](https://pragprog.com/titles/aapg/high-performance-postgresql-for-rails/)

**Courses**
- [PostgreSQL DBA - roadmap.sh](https://roadmap.sh/postgresql-dba)
- [Percona University - PostgreSQL Performance](https://www.percona.com/training)

**Tools and Documentation**
- [CloudNative-PG Operator](https://cloudnative-pg.io/documentation/)
- [Patroni - HA PostgreSQL](https://patroni.readthedocs.io/)
- [Flyway Database Migrations](https://fldocs.flyway.com/)
- [PgBouncer Documentation](https://www.pgbouncer.org/config.html)
- [postgres_exporter](https://github.com/prometheus-community/postgres_exporter)
- [pg_stat_statements](https://www.postgresql.org/docs/current/pgstatstatements.html)
- [Expand-Contract Pattern](https://www.prisma.io/dataguide/types/relational/expand-and-contract-pattern)

---

Once you complete this task you will operate databases the way companies that cannot afford data loss operate them - with defined recovery targets, zero-downtime change processes, and visibility into every aspect of database behavior.
