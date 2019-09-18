NEW TEMPLATE GUIDE

Install node.js
https://nodejs.org/en/download/

Navigate to root of project folder in command prompt. In this instance: (c:\user\[name]\source\repos\1097 Candlewood Brand Orientation\Brand Orientation\Brand Orientation)

Install gulp cli 
>npm install --global gulp-cli

Install required node packages with:
>npm install
This means node_modules isn't needed in team project because it's blacklisted in .gitignore and the folder is created from command prompt.
You can also run the install-dependencies.bat file included in the root

Compile all scripts with
>gulp build
This deletes the old compiled .css and .js files and re-compiles them.
You can also run the build.bat file included in the root.

For auto compiling, you can run the following in a command prompt, note the command prompt window must keep running.
>gulp watch:sass
Open a new command prompt window and run
>gulp watch:scripts
These will compile scripts and sass whenever you save a file in the scripts or sass folder in the root.

Both gulp watchers need to be restarted if you create a new script file to be concatenated as the watched doesn't updated the list after it's first call.

Remember you can do manual builds with
>gulp build

See folder structuring below:

node_modules\
Remember this folder isn't synced in the repo, only created from command prompt based on dependencies listed in package.json
Any changes to the package.json file means that '>npm install' needs to be ran again on any other users working on the project, it's best practice to do this after fetching any changes and rebuilding.

sass\
	abstracts\
	base\
	components\
	layout\
	pages\
	themes\
	vendors\
	main.scss
This folder must only contain .scss files for the compiler to work. All .css files ARE valid .scss files, just need to change the extension when adding additional files.
All files must be listed in the includes of main.scss to be included in compiled file.

scripts\
This contains some vendor script files. I've not included all of these in the below www\ folder to save on production file size.
When creating a new script file in this folder, it must be included in the gulpfile.js to be concatenated

www\
This contains everything required for scorm .zip file. It shouldn't contain anything you don't want to include in your final .zip 
eg...
	bin\
	My Project\
	obj\
	Properties\
The css\ folder in here should only contain font files and one main.css file. The fonts folder shouldn't contain any .css files.
The js\ folder in here should only contain one scripts.js file after concatenation UNLESS babel is used in the gulp pipe, then a polyfill.js file will also be found in this folder. DON'T DELETE.

The debug/edit tool has been moved into the www\console\ folder to fix issues with .gitignore

Current template www\ folder stands at 1.1MB

This project with all images, video, styling and scripts comes to 144MB but in only 75 files for a much faster upload speed.

All HTML and CSS has been written with BEM class naming methodology in mind you can read more about this here:
https://en.bem.info/methodology/quick-start/
The basics for the naming structure is .block__element--modifier or in practice, something like:


<section class="page-row background--cherry">
    <article class="page-row__text page-row__text--right white-txt"></article>
</section>

.page-row	is the block
__text		is the element
--right		is the modifier

RK: also added _mixin.scss - Mixins allow you to define styles that can be re-used throughout your stylesheet. 
Example: @include background-horizontal-left($startColor: $white, $endColor: $transparent);