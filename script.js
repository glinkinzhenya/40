// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел(наприклад[1, 2, 3])
//  і генерує список з елементів:

/* <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

<ul>
    <li>1</li>
    <li>2</li>
    <li>
        <ul>
            <li>1.1</li>
            <li>1.2</li>
            <li>1.3</li>
        </ul>
    </li>
    <li>3</li>
</ul> */

const arrayNumber = [1, 2, [3.1, 3.2, 3.3], 4, [5.1, 5.2]];

function generateList(array2) {

    const ul = document.createElement("ul");

    array2.forEach((i) => {
        if (Array.isArray(i)) {
            const liSecond = document.createElement("li");
            const ulSecond = document.createElement("ul");

            i.forEach(j => {
                const liThird = document.createElement("li");
                liThird.innerText = j;

                ulSecond.append(liThird);
                liSecond.append(ulSecond);
                ul.append(liSecond);
            });

        } else {
            const li = document.createElement("li");
            li.innerText = i;
            ul.append(li);
        };
    });
    document.body.append(ul);
};
generateList(arrayNumber);