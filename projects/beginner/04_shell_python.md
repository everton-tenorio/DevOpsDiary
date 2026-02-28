---
title: Shell and Python Automation
description: Combine shell scripting and Python to automate system setup and file processing tasks
tags: [beginner, automation, shell, python, scripting]
---

## Learning Objectives

- Integrate multiple scripting languages for powerful automation
- Learn system package management via scripting
- Develop file processing and analysis skills using Python
- Implement proper script parameter handling
- Create maintainable and well-documented automation code

## Requirements

You are required to write two interconnected scripts:

1. **Bash Script: `setup-environment.sh`**
   - Detect the operating system (Debian/Ubuntu, RHEL/CentOS)
   - Update package lists (`apt update`, `yum update`)
   - Install required packages: `curl`, `wget`, `htop`, `vim`, `python3`, `python3-pip`
   - Create a project directory structure:
     ```
     automation/
     ├── data/
     ├── scripts/
     ├── logs/
     └── output/
     ```
   - Set appropriate permissions for each directory
   - Create a Python virtual environment (`venv`)
   - Log all operations with timestamps

2. **Python Script: `line_counter.py`**
   - Accept command-line arguments: input path, output format (text/CSV/JSON), verbosity level
   - Process text files and count: total lines, non-empty lines, comment lines, word count, character count
   - Handle multiple files if a directory is provided
   - Generate a detailed report in the specified format
   - Implement proper error handling
   - Include progress indicators for large files

3. **Integration**
   - The Bash script installs Python dependencies via pip
   - The Bash script copies `line_counter.py` to the `scripts/` directory
   - Add test files to `data/` for demonstration

### Stretch Goals

- Add a configuration file for customizable settings
- Implement file type detection with specialized counting per language
- Add multithreading for processing multiple files concurrently
- Create a simple Flask web interface to view results

### Deliverables

- `setup-environment.sh` and `line_counter.py`
- Sample input files for testing
- Example output reports in text, CSV, and JSON formats
- Documentation covering usage, parameters, examples, and troubleshooting

### References

- [Bash Scripting Tutorial](https://linuxconfig.org/bash-scripting-tutorial-for-beginners)
- [Python Argparse Tutorial](https://docs.python.org/3/howto/argparse.html)
- [Python File I/O Documentation](https://docs.python.org/3/tutorial/inputoutput.html)
- [Working with Virtual Environments](https://docs.python.org/3/library/venv.html)
- [Linux Package Management Comparison](https://www.digitalocean.com/community/tutorials/package-management-basics-apt-yum-dnf-pkg)
- [Advanced Bash-Scripting Guide](https://tldp.org/LDP/abs/html/index.html)

---

Once you complete this task you will know how to combine shell scripting and Python for real-world automation - a powerful combination that bridges system administration and application development.