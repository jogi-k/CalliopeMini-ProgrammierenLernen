texheader   := /home/jogi/work/CalliopeMini-ProgrammierenLernen/header.tex
mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
current_dir := $(notdir $(patsubst %/,%,$(dir $(mkfile_path))))
all: index.html



index.html: WEBROOT.md 
	pandoc -t html WEBROOT.md kurs_html.md -c pandoc.css -s -o index.html 



${PWD##*/}


