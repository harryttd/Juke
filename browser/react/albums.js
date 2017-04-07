'use strict';
import React from 'react';

export default ({ albums, clickHandler }) => (

  <div>
    <h3>Albums</h3>
    <div className="row">
      {
        albums.map(album => {
          return (
            <div key={ album.id } className="col-xs-4">
              <a className="thumbnail" href="#" onClick={ () => clickHandler(album.id) }>
                <img src={ album.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              </a>
            </div>
          );
        })
      }
    </div>
  </div>
);

// export default class Albums extends React.Component {
//
//   render() {
//     const props = this.props;
//     const albumElements = props.albums.map(album => {
//       return (
//         <div key={ album.id } className="col-xs-4">
//           <a className="thumbnail" href="#" onClick={ () => props.clickHandler(album.id) }>
//             <img src={ album.imageUrl } />
//             <div className="caption">
//               <h5>
//                 <span>{ album.name }</span>
//               </h5>
//               <small>{ album.songs.length } songs</small>
//             </div>
//           </a>
//         </div>
//       );
//     });
//
//     return (
//       <div>
//         <h3>Albums</h3>
//         <div className="row">
//           { albumElements }
//         </div>
//       </div>
//     );
//   }
// }
