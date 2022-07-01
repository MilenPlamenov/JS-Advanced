function editElement(element, match, replacer) {
    let elInner = element.innerHTML;
    let matcher = new RegExp(match, 'g');
    element.innerHTML = elInner.replace(matcher, replacer);
}