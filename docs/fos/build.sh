uglifyjs src/Bar.class.js src/Icon.class.js src/MenuItem.class.js src/Window.class.js src/Desktop.class.js src/Menu.class.js src/Panel.class.js -c -o build/fos.min.js

sed -i '' 's/\\t//g' build/fos.min.js

sed -i '' 's/\\n//g' build/fos.min.js
