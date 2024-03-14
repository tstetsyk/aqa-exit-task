## Basic Shell Commands
#### echo   
Displays a line of text.
```sh
$ echo Hello World
```
#### pwd  
Displays the current working directory.
```sh
$ pwd
```
#### cd
Changes the current directory.
```sh
$ cd /path/to/directory
```
#### ls
Lists files and directories in the current directory.
- -l: Long format listing
- -a: Include hidden files
```sh
$ ls -la
```
#### touch
Creates an empty file or updates file timestamps.
```sh
$ touch file_name
```
#### file
Displays the file type.
```sh
$ file file_name
```
#### cat
Displays the contents of a file.
```sh
$ cat file_name
```
#### less 
Displays the contents of a file one page at a time.
```sh
$ less file_name
```
#### history  
Displays a list of the previously executed commands.
```sh
$ history
```
#### clear
Clears the terminal.
```sh
$ clear
```
#### cp 
Copies files or directories.
```sh
$ cp file_name /destination
```
#### mv 
Moves or renames files or directories.
```sh
$ mv old_name new_name
$ mv file_name /destination
```
#### mkdir 
Creates a new directory.
```sh
$ mkdir directory_name
```
#### rm
Removes files or directories.
```sh
$ rm file_name
$ rmdir directory_name
```
#### find
Searches for files and directories.
- -name: Search by filename.
- -type: Search by file type.
```sh
$ find /path/to/search -name file_name
```
#### help 
Displays information and usage instructions for built-in shell commands.
```sh
$ help cd
```