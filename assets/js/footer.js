const footerEl = document.createElement('footer');
footerEl.setAttribute('class', 'container rounded-t-lg max-w-screen-m mx-auto mt-5 bg-gradient-to-r from-slate-100 via-white to-slate-300');

const wrapperDivEl = document.createElement('div');
wrapperDivEl.setAttribute('class', 'flex align-middle pt-8');

const linksElements = () => {
    const links = [
        { href: 'https://www.linkedin.com/in/argenis-dominguez/', iconClass: 'fa-brands fa-linkedin-in'},
        { href: 'https://www.facebook.com/argenis.dgz.2008/', iconClass: 'fa-brands fa-facebook' },
        { href: 'https://twitter.com/ArgenisDoming18/', iconClass: 'fa-brands fa-x-twitter' },
        { href: 'https://github.com/RubenDguez/', iconClass: 'fa-brands fa-github' },
        { href: 'https://rubendguez.github.io/rdominguez/', iconClass: 'fa-solid fa-rocket' },
    ]

    return links.map((link) => {
        const linkEl = document.createElement('a');
        linkEl.setAttribute('class', 'inline-block align-middle px-5');
        linkEl.setAttribute('target', '_blank');
        linkEl.setAttribute('href', link.href);

        const iconEl = document.createElement('i');
        iconEl.setAttribute('class', link.iconClass);

        linkEl.appendChild(iconEl);

        return linkEl;
    })
};

const linkWrapperDiv = document.createElement('div');
linkWrapperDiv.setAttribute('class', 'text-center text-4xl w-full pt-8');
linksElements().forEach((el) => linkWrapperDiv.appendChild(el));

const textWrapperDiv = document.createElement('div');
textWrapperDiv.setAttribute('class', 'w-full text-right inline-block align-middle pt-3 pr-5')

const textEl = document.createElement('p');
textEl.textContent = `Seeking new challenges and opportunities, I am excited to apply my skills and expertise to dynamic organizations where I can create impactful results and help advance innovative technologies.`;
textWrapperDiv.appendChild(textEl);

const copyRightWrapper = document.createElement('div');
copyRightWrapper.setAttribute('class', 'text-center w-full pt-16 pb-8');

const copyRightText = document.createElement('p');
copyRightText.setAttribute('class', 'text-center w-full pt-16 pb-8');
copyRightText.textContent = `© ${new Date().getFullYear()} Argenis Ruben Dominguez`;

copyRightWrapper.appendChild(copyRightText);

wrapperDivEl.appendChild(linkWrapperDiv);
wrapperDivEl.appendChild(textWrapperDiv);

footerEl.appendChild(wrapperDivEl);
footerEl.appendChild(copyRightText);
document.body.appendChild(footerEl);
