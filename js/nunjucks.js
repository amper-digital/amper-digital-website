const nunjucks = require('nunjucks');
const fs = require('fs');

nunjucks.configure('./templates', { autoescape: true });

function createPage(filename, pageTitle) {

    // adapts file if it's the index.html (needs unique file paths and output location)
    rel_file_path = '';
    output_location = '';
    if (filename !== 'index' && filename !== '404') { 
        rel_file_path = '../' 
        output_location = './pages/'
    };

    fs.writeFileSync(
        output_location+filename+'.html', nunjucks.render(filename+'.njk', { 
            pageTitle: pageTitle+' | Amper Digital',
            filePath: rel_file_path
        }));
};

try {
    /*
    createPage 1st param: name of .njk template, will also be set as name for .html file
    createPage 2nd param: sets <title> attribute of html file
    */
    // createPage('index', 'Home'); DEBUGGING HOME PAGE ATM
    createPage('404', '404 error');
    createPage('training', 'Training');
    createPage('testing', 'Testing');
    createPage('consulting', 'Consulting Services');
    createPage('accessibility-statement', 'Accessibility Statement');
    // success message:
    console.log('Pages successfully created.');
} catch(error) {
    console.error('Error rendering or writing pages:', error);
};