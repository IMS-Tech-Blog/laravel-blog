#!/bin/bash

echo "# laravel-blog" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/IMS-Tech-Blog/laravel-blog.git
git push -u origin master
