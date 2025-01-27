import fs from 'fs';

export const gitignore = () => {
    if (!fs.existsSync('.gitignore')) {
        fs.writeFileSync('./.gitignore', '');
        fs.appendFileSync('./.gitignore', 'phpmailer/\r\n');
        fs.appendFileSync('./.gitignore', 'package-lock.json\r\n');
        fs.appendFileSync('./.gitignore', 'node_modules/\r\n');
        fs.appendFileSync('./.gitignore', '.gitignore\r\n');
        fs.appendFileSync('./.gitignore', 'dist/\r\n');
        fs.appendFileSync('./.gitignore', 'Source/\r\n');
        fs.appendFileSync('./.gitignore', 'version.json\r\n');
        // fs.appendFileSync('./.gitignore', app.path.buildFolder + '\r\n');
        fs.appendFileSync('./.gitignore', '**/*.zip\r\n');
        fs.appendFileSync('./.gitignore', '**/*.rar\r\n');
    }

    return app.gulp.src(`${app.path.srcFolder}`);
};