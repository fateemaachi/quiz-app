document.addEventListener("DOMContentLoaded", function () {
    const displayWinners = () => {
        const winnersTbody = document.getElementById("winners-tbody");
        let winners = JSON.parse(localStorage.getItem('winners')) || [];

        winnersTbody.innerHTML = ''; // Clear the existing table rows
        winners.forEach(winner => {
            let row = document.createElement("tr");
            row.classList.add("bg-white", "border-b", "dark:bg-gray-800", "dark:border-gray-700");

            row.innerHTML = `
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${winner.student || 'N/A'}
                </th>
                <td class="px-6 py-4">
                    ${winner.school || 'N/A'}
                </td>
                <td class="px-6 py-4">
                    ${winner.score || 'N/A'} <!-- Use default 'N/A' if score is missing -->
                </td>
                <td class="px-6 py-4">
                    ${winner.date || 'N/A'}
                </td>
            `;

            winnersTbody.appendChild(row);
        });
    };

    displayWinners(); // Call function to display winners
});
