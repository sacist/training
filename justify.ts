const justify = (text: string, width: number): string => {
    const words = text.split(' ');
    let widthCounter = 0;
    const parts: string[] = [];
    let tempPart: string[] = [];

    for (let i = 0; i < words.length; i++) {
        if (widthCounter + words[i].length + tempPart.length > width) {
            parts.push(tempPart.join(' '));
            tempPart = [];
            widthCounter = 0;
        }
        tempPart.push(words[i]);
        widthCounter += words[i].length;
    }
    if (tempPart.length) {
        parts.push(tempPart.join(' '))
    }

    const justifySpace = (lines: string[]) => {
        const justifiedLines: string[] = [];

        for (let i = 0; i < lines.length - 1; i++) {
            const words = lines[i].split(' ')
            if (words.length === 1) {
                justifiedLines.push(words[0])
                continue
            }

            let totalSpaces = width - lines[i].replace(/ /g, '').length
            let gaps = words.length - 1;
            let spacePerGap = Math.floor(totalSpaces / gaps);
            let extraSpaces = totalSpaces % gaps;

            let justifiedLine = '';
            for (let j = 0; j < words.length; j++) {
                justifiedLine += words[j];
                if (j < words.length - 1) {
                    justifiedLine += ' '.repeat(spacePerGap + (extraSpaces > 0 ? 1 : 0));
                    if (extraSpaces > 0) extraSpaces--;
                }
            }

            justifiedLines.push(justifiedLine);
        }

        justifiedLines.push(lines[lines.length - 1]);

        return justifiedLines.join('\n');
    };

    return justifySpace(parts);
};

const LIPSUM =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.';
console.log(justify(LIPSUM, 30));