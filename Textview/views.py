# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
import os
import re
import json

# Create your views here.
def main(request):
    return render(request, "index.html")

def research(request, keyword):
    basePath = "H:/GHOST/God Model"
    dirs = os.listdir(basePath)
    lstFile = []
    #for key in keyword.split(" "):

    for f in dirs:
       if f.endswith(".txt") and os.path.isfile(os.path.join(basePath, f)):
           txtFile = open(os.path.join(basePath, f))
           tmpStr = txtFile.read().decode('utf-8')
           pattern = re.compile("((?=.*" + ")(?=.*".join(keyword.split(" ")) + ").*)")
           if pattern.search(tmpStr):
               lstFile.append(f)
    return HttpResponse(json.dumps({"result":lstFile}))

def getcontent(request, filename):
    basePath = "H:/GHOST/God Model"
    txtFile = open(os.path.join(basePath, filename))
    return HttpResponse(txtFile.read().decode('utf-8'))