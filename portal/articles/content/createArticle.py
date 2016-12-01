#encoding: UTF-8
import re
import sys

##contentfile为内容文件，infile为生成的html文件
def createArticle(contentfile,infile):
    titlePattern = re.compile(r'<%title%>')
    contentPattern = re.compile(r'<%content%>')
    categoryPattern = re.compile(r'<%category%>')
    createtimePattern = re.compile(r'<%createtime%>')
    outFile = open('./articleModel.html','r')
    contentFile = open(contentfile,'r')
    inFile = open(infile,'w')

    title = contentFile.readline()##文章名在第1行
    category = contentFile.readline()##分类在第2行
    createtime = contentFile.readline()##创建时间在第3行

    for line in outFile.readlines():
        if(titlePattern.search(line)):
            inFile.write(title)
        elif(categoryPattern.search(line)):
            inFile.write(category)
        elif(createtimePattern.search(line)):
            inFile.write(createtime)
        elif(contentPattern.search(line)):
            for content in contentFile.readlines():
                inFile.write(content)
        else:
            inFile.write(line)

    outFile.close()
    contentFile.close()
    inFile.close()

if __name__=="__main__":
##    contentfile = './articleContent/articleContent1.txt'
##    infile = './article1.html'
##    createArticle(contentfile,infile)
    createArticle(sys.argv[1],sys.argv[2])

#####createArticle.py ./articleContent/articleContent1.txt ./article1.html
