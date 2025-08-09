function caseCard(bgColorHov,caseID, Title, Type, bgColor, Urgency, DaysPending) {
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
    document.getElementsByTagName("tbody")[0].innerHTML = document.getElementsByTagName("tbody")[0].innerHTML +html;
}
caseCard("hover:bg-red-50","2023-CR-152","State vs. John Doe (Homicide)","Criminal","bg-red-500","CRITICAL","8")
caseCard("hover:bg-orange-50","2023-FA-342","Child Custody Dispute","Family","bg-orange-500","HIGH","15")
caseCard("hover:bg-yellow-50","2023-FA-343","Child Custody Dispute","Family","bg-yellow-500","MEDIUM","8")
caseCard("hover:bg-green-50","2023-FA-344","Child Custody Dispute","Family","bg-green-500","LOW","3")
