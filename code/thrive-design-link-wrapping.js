function handleLink(self) {
    var link = !!($(self).find('h3 a').attr('href')) ? $(self).find('h3 a') : $(self).find('a'),
        href = $(link).attr('href'),
        target = $(link).attr('target');

    if (target == '_blank') {
        $(self).wrapInner('<a href="' + href + '" target="_blank" rel="noopener" />');
    } else {
        $(self).wrapInner('<a href="' + href + '" />');
    }

    if ($(link).parent().is('h3')) {
        $(link).contents().unwrap();
    } else {
        $(link).hide();
    }
}