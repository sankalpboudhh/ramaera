import ProgressBar from "react-bootstrap/ProgressBar";

function Progress() {
  const now = 80;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default Progress;

// import LinearProgress from "@mui/joy/LinearProgress";

// import { makeStyles } from "@mui/styles";

// const Progress_bar = () => {
//   const useStyles = makeStyles({
//     root: {
//       height: 10,
//       borderRadius: 5,
//     },
//     bar: ({ progress }) => ({
//       borderRadius: 5,
//       background: `linear-gradient(90deg, #6fcbb6 ${
//         100 - progress
//       }%, #9c64f4 100%)`,
//     }),
//   });

//   const Progress = ({ progress = 20 }) => {
//     const classes = useStyles({ progress });

//     return (
//       <LinearProgress
//         classes={{ root: classes.root, bar: classes.bar }}
//         variant="determinate"
//         value={progress}
//       />
//     );
//   };
// };
// export default Progress_bar;

// // import React from "react";

// // const Progress_bar = ({ bgcolor, progress, height }) => {
// //   const Parentdiv = {
// //     height: height,
// //     width: "100%",
// //     backgroundColor: "whitesmoke",
// //     borderRadius: 40,
// //     margin: 50,
// //   };

// //   const Childdiv = {
// //     height: "100%",
// //     width: `${progress}%`,
// //     backgroundColor: bgcolor,
// //     borderRadius: 40,
// //     textAlign: "right",
// //   };

// //   const progresstext = {
// //     padding: 10,
// //     color: "black",
// //     fontWeight: 900,
// //   };

// //   return (
// //     <div style={Parentdiv}>
// //       <div style={Childdiv}>
// //         <span style={progresstext}>{`${progress}%`}</span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Progress_bar;
