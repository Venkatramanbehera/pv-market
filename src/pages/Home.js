// import React, { Fragment, useState } from "react";
// // import { useAlert } from "react-alert";
// const Home = () => {
//   const alert = useAlert();
//   const [action, setAction] = useState("");
//   return (
//     <Fragment>
//       <button
//         onClick={() => {
//           alert.show("Oh look, an alert!");
//         }}
//       >
//         Simple Alert
//       </button>
//       <button
//         onClick={() => {
//           alert.show("This is an alert with title!", {
//             title: "Random Alert Title"
//           });
//         }}
//       >
//         Alert with title
//       </button>
//       <button
//         onClick={() => {
//           alert.show("This is an alert with extra actions!", {
//             title: "Alert with extra actions!",
//             actions: [
//               {
//                 copy: "Do something",
//                 onClick: () => setAction("Actioned!")
//               }
//             ]
//           });
//         }}
//       >
//         Alert with actions
//       </button>
//       <button
//         onClick={() => {
//           alert.show("You can change copy of close button now!", {
//             title: "Changed copy to 'Cancel'",
//             closeCopy: "Cancel"
//           });
//         }}
//       >
//         change copy on close button
//       </button>
//       <div>{action}</div>
//     </Fragment>
//   );
// };

// export default Home;
