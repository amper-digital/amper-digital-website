const nunjucks = require('nunjucks');
const fs = require('fs');

nunjucks.configure('./templates', { autoescape: true });

class Page {
    constructor(filename, pageTitle, language, otherLangPage) {
        this.filename = filename;
        this.pageTitle = pageTitle;
        this.language = language;
        this.otherLangPage = otherLangPage;
    }

    create() {
        // adapts file if it's the index.html (needs unique file paths and output location)
        const relFilePath = this.filename !== 'index' && this.filename !== '404' ? '../' : '';
        const outputLocation = this.filename !== 'index' && this.filename !== '404' ? './pages/' : '';

        fs.writeFileSync(
            `${outputLocation}${this.filename}.html`,
            nunjucks.render(`${this.filename}.njk`, {
                pageTitle: `${this.pageTitle} | Amper Digital`,
                filePath: relFilePath,
                language: `${this.language}`,
                otherLangPage: `${this.otherLangPage}`,
            })
        );
    }
}

const pages = [
    // Page(filename, page title, language, other language url)
    new Page('index', 'Home', 'en', 'test'),
    new Page('404', '404 error', 'en', 'test'),
    new Page('training', 'Training', 'en', 'test'),
    new Page('testing', 'Testing', 'en', 'test'),
    new Page('consulting', 'Consulting Services', 'en', 'test'),
    new Page('accessibility-statement', 'Accessibility Statement', 'en', 'test'),
    new Page('privacy-policy', 'Privacy Policy', 'en', 'polisi-preifatrwydd.html'),
    new Page('polisi-preifatrwydd', 'Polisi Preifatrwydd', 'cy', 'privacy-policy.html')
];

try {
    for (const page of pages) {
        page.create();
    }
    console.log('Pages successfully created.');
} catch (error) {
    console.error('Error rendering or writing pages:', error);
}
