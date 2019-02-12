mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
current_dir := $(notdir $(patsubst %/,%,$(dir $(mkfile_path))))
all: ${current_dir}.pdf  

       
${current_dir}.pdf : README.md ../../header.tex
	pandoc -t beamer -H ../../header.tex ../../kurs.md README.md  -o ${current_dir}.pdf 
	pandoc -t html ../../kurs.md README.md  -o ${current_dir}.html 
${PWD##*/}
