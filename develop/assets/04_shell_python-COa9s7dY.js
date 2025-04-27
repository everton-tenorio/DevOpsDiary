const t=`---
title: Shell and Python Automation
description: Combine the power of shell scripting and Python to automate system setup and file processing tasks
tags: [beginner, automation, shell, python, scripting]
---

## Learning Objectives
- Integrate multiple scripting languages for powerful automation solutions
- Learn system package management via scripting
- Develop file processing and analysis skills using Python
- Implement proper script parameter handling
- Create maintainable and well-documented automation code

## Requirements

You are required to write two interconnected scripts:

1. **Bash Script: \`setup-environment.sh\`**
   - Detect the operating system (Debian/Ubuntu, RHEL/CentOS, etc.)
   - Update package lists appropriately (\`apt update\`, \`yum update\`, etc.)
   - Install required packages:
     - System utilities: \`curl\`, \`wget\`, \`htop\`, \`vim\`
     - Python and dependencies: \`python3\`, \`python3-pip\`
   - Create a project directory structure:
     \`\`\`
     automation/
     ├── data/
     ├── scripts/
     ├── logs/
     └── output/
     \`\`\`
   - Set appropriate permissions for each directory
   - Create a virtual environment for Python (using \`venv\`)
   - Log all operations with timestamps

2. **Python Script: \`line_counter.py\`**
   - Accept command-line arguments:
     - Input file or directory path
     - Output format (text, CSV, JSON)
     - Verbosity level
   - Process input text files to count:
     - Total lines
     - Non-empty lines
     - Comment lines (if code files)
     - Word count
     - Character count
   - Handle multiple files if a directory is provided
   - Generate a detailed report in the specified format
   - Implement proper error handling
   - Include progress indicators for large files

3. **Integration**
   - The Bash script should install Python dependencies via pip
   - The Bash script should copy \`line_counter.py\` to the \`scripts\` directory
   - Add test files to the \`data\` directory for demonstration

### **Stretch goals**
- Add a configuration file for customizable settings
- Implement file type detection and specialized counting for different languages
- Create a summary visualization (ASCII charts or export data for plotting)
- Add multithreading for processing multiple files concurrently
- Create a simple web interface using Flask to view results

### Deliverables
- Complete \`setup-environment.sh\` script
- Complete \`line_counter.py\` script
- Sample input files for testing
- Example output reports in different formats
- Documentation for both scripts, including:
  - Usage instructions
  - Parameter descriptions
  - Example commands
  - Troubleshooting tips

### Links
- [Bash Scripting Tutorial](https://linuxconfig.org/bash-scripting-tutorial-for-beginners)
- [Python Argparse Tutorial](https://docs.python.org/3/howto/argparse.html)
- [Python File I/O Documentation](https://docs.python.org/3/tutorial/inputoutput.html)
- [Working with Virtual Environments](https://docs.python.org/3/library/venv.html)
- [Linux Package Management Comparison](https://www.digitalocean.com/community/tutorials/package-management-basics-apt-yum-dnf-pkg)
- [Advanced Bash-Scripting Guide](https://tldp.org/LDP/abs/html/index.html)
- [Real Python - Python Development in VS Code](https://realpython.com/python-development-visual-studio-code/)

---

Once you have completed this project, you will know how to combine shell scripting and Python for real-world automation tasks - a powerful combination for DevOps engineers that bridges system administration and application development.`;export{t as default};
