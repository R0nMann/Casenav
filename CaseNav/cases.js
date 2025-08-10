function caseCard(bgColorHov, caseID, Title, Type, bgColor, Urgency, DaysPending) {
    let html = `<tr class="urgency-5 ${bgColorHov}">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${caseID}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${Title}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${Type}</td>
        <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 py-1 text-xs font-semibold rounded-full ${bgColor} text-white">${Urgency}</span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${DaysPending}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <button class="text-indigo-600 hover:text-indigo-900 mr-4">Review</button>
            <button class="text-green-600 hover:text-green-900">Assign</button>
        </td>
    </tr>`;
    document.getElementsByTagName("tbody")[0].innerHTML += html;
}

function getUrgencyStyles(urgency) {
    if (!urgency) urgency = 'low';
    urgency = urgency.trim().toLowerCase();
    switch (urgency) {
        case 'critical':
        case 'high':
            return { bgColorHov: "hover:bg-red-50", bgColor: "bg-red-500" };
        case 'medium':
            return { bgColorHov: "hover:bg-yellow-50", bgColor: "bg-yellow-500" };
        case 'low':
            return { bgColorHov: "hover:bg-green-50", bgColor: "bg-green-500" };
        default:
            return { bgColorHov: "hover:bg-gray-50", bgColor: "bg-gray-500" };
    }
}

async function loadCases() {
    try {
        const response = await fetch('http://localhost:8080/api/cases/prioritized');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const cases = await response.json();
        const tbody = document.getElementsByTagName("tbody")[0];
        tbody.innerHTML = "";  // Clear existing rows

        cases.forEach(c => {
            const { bgColorHov, bgColor } = getUrgencyStyles(c.urgencyLevel);
            const title = `${c.caseId} - ${c.caseType}`;
            caseCard(bgColorHov, c.caseId, title, c.caseType, bgColor, c.urgencyLevel, c.pendingDays);
        });
    } catch (error) {
        console.error('Failed to load cases:', error);
        const tbody = document.getElementsByTagName("tbody")[0];
        tbody.innerHTML = `<tr><td colspan="6" class="text-center text-red-600 py-4">Failed to load cases: ${error.message}</td></tr>`;
    }
}

window.addEventListener('DOMContentLoaded', loadCases);
