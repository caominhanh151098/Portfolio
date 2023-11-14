// let portfolio_detail;
// window.onload = function () {
//     portfolio_detail = JSON.parse(localStorage.getItem("portfolio_detail"));

//     const portfolio_info = portfolio_detail.portfolio_info;
//     const portfolio_imgs = portfolio_detail.portfolio_imgs;

//     document.getElementById("portfolio-info").innerHTML =
//         `<div class="portfolio-info">
//                 <h3>Thông tin dự án</h3>
//                 <ul>
//                     <li><strong>Loại</strong>: ${portfolio_info.category}</li>
//                     <li><strong>Tên dự án</strong>: ${portfolio_info.nameProject}</li>
//                     <li><strong>Thời gian</strong>: ${portfolio_info.time}</li>
//                     ${portfolio_info.linkProject ?
//             `<li><strong>Link Dự án</strong>: <br><a href="${portfolio_info.linkProject}" target="_blank">${portfolio_info.linkProject}</a></li>`
//             : ""}
//             ${portfolio_info.linkGithubClient ?
//             `<li><strong>Link Dự án</strong>: 
//                 <br>Link Server<a href="${portfolio_info.linkGithubServer}" target="_blank">: ${portfolio_info.linkGithubServer}</a>
//                 <br>Link Client<a href="${portfolio_info.linkGithubClient}" target="_blank">: ${portfolio_info.linkGithubClient}</a>
//             </li>`
//             : `<li><strong>Link Github</strong>: <br><a href="${portfolio_info.linkGithubServer}" target="_blank">${portfolio_info.linkGithubServer}</a></li>`}
                    
                    
//                 </ul>
//             </div>
//             <div class="portfolio-description">
//                 <h2>Mô tả về dự án</h2>
//                 <p>
//                 ${portfolio_info.description}
//                 </p>
//             </div>`;

//     let Imgs = document.getElementById("img-list");
//     portfolio_imgs.forEach(e => 
//         Imgs.innerHTML += `asd`
//         )



// }
