        // label the images to visually track them, just for convenience,
        // this code can be removed
        let i = 1;
        for (let li of document.querySelectorAll('li')) {
            li.style.position = 'relative';
            li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
            i++;
        }

        // ...your code to make carousel alive!
        let liEls = document.querySelectorAll('li');
        let index = 0;
        window.show = function (increase) {
            // let para = document.querySelector('#test');
            // test.innerHTML = "blah"
            const list = document.querySelector("ul");
            if (increase > 0)
                list.appendChild(list.firstElementChild);
            else
                list.prepend(list.lastElementChild)
            // list.removeChild(list.firstElementChild)

            // let liList = document.querySelectorAll('li');

            // let lastEl = liList.pop()
            // liList.unshift(lastEl);

            // index = index + increase;
            // index = Math.min(Math.max(index, 0), liEls.length - 1);
            // liEls[index].scrollIntoView({ behavior: 'smooth' });
        }