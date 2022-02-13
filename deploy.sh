rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:1099571219/zcore-ui-website.git &&
git push -f -u origin main &&
cd .. &&
echo https://1099571219.github.io/zcore-ui-website/index.html