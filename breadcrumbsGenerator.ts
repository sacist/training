const generateBC = (url: string, separator: string): string => {
    const ignoredWords = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"]

    let cleanedUrl = url
    if (cleanedUrl.startsWith('http://')) {
        cleanedUrl = cleanedUrl.slice(7)
    } else if (cleanedUrl.startsWith('https://')) {
        cleanedUrl = cleanedUrl.slice(8)
    }
    if (cleanedUrl.startsWith('www.')) {
        cleanedUrl = cleanedUrl.slice(4)
    }

    let parts = cleanedUrl.split('/').filter(val => val !== '' && !val.includes('index.'))

    if (parts.length > 0 && parts[0].includes('.')) {
        parts.shift()
    }

    if (parts.length === 0) {
        return '<span class="active">HOME</span>'
    }

    let breadcrumbs = ['<a href="/">HOME</a>']
    let path = '/'

    for (let i = 0; i < parts.length; i++) {
        let segment = parts[i]

        if (segment.includes('?')) {
            segment = segment.split('?')[0]
        }

        if (segment.includes('#')) {
            segment = segment.split('#')[0]
        }

        if (i === parts.length - 1 && segment.includes('.')) {
            segment = segment.split('.')[0]
        }

        let title = segment.split('-')
            .filter(word => word !== '')
            .join(' ');

        if (title.length > 30) {
            title = title.split(' ')
                .map(word => ignoredWords.includes(word.toLowerCase()) ? '' : word[0])
                .join('')
                .toUpperCase();
        } else {
            title = title.toUpperCase();
        }
        if (i !== parts.length - 1) {
            path += segment + '/';
            breadcrumbs.push(`<a href="${path}">${title}</a>`);
        } else {
            breadcrumbs.push(`<span class="active">${title}</span>`);
        }
    }

    return breadcrumbs.join(separator);
};

console.log(generateBC('https://www.codewars.com/kata/563fbac924106b8bf7000046/train/javascript', ' + '));

// ЖАРКАЯ ХУЙНЯ