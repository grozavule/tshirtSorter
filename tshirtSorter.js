/*
Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. 
The above example would be returned sssssssmmmmmlllll.

The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.
*/

const orderShirtSizes = pile => {
    pile = pile.toLowerCase().replaceAll(' ', '');
    
    let smallSizes = '';
    let mediumSizes = '';
    let largeSizes = '';

    for(let i = 0; i < pile.length; i++)
    {
        switch(pile[i])
        {
            case 's':
                smallSizes += pile[i];
                break;
            case 'm':
                mediumSizes += pile[i];
                break;
            case 'l':
                largeSizes += pile[i];
                break;
        }
    }
    return smallSizes + mediumSizes + largeSizes;
}

const orderTshirtSizes = pile => {
    let smallSizes = pile.toLowerCase().split('').filter(size => size === 's');
    let mediumSizes = pile.toLowerCase().split('').filter(size => size === 'm');
    let largeSizes = pile.toLowerCase().split('').filter(size => size === 'l');

    return smallSizes.concat(mediumSizes, largeSizes).join('');
}

// console.log(orderShirtSizes('lms'));
// console.log(orderShirtSizes('smllms'));
// console.log(orderShirtSizes('SmlLms'));
// console.log(orderShirtSizes('S  m l   L m s'));
// console.log(orderShirtSizes('mmslllsmmsllsmlslmlsmlmslmmslmslml'));
// console.log(orderShirtSizes('fasjdflkajslcmaslcmasldkajlsdhglaksjflkasdjfasjgl'));
console.log(orderTshirtSizes('fasjdflkajslcmaslcmasldkajlsdhglaksjflkasdjfasjgl'));