import C from '../constants';
import { database } from '../firebaseApp';

const newsRef = database.ref('/stream');

export const listenToNews = () => {
    console.log('Start listenToNews');
    return (dispatch) => {
        newsRef.off();
        newsRef.on('child_added', (snapshot) => {
                dispatch({
                        type: C.ARTICLES_RECEIVE_DATA,
                        data: snapshot.val()
                });
        }, (error) => {
                dispatch({
                        type: C.ARTICLES_RECEIVE_DATA_ERROR,
                        message: error.message
                });
        });
//        var count = 0;
//        console.log('Start listen news');
//        newsRef.on('child_added', function (snapshot) {
//            console.log(++count, snapshot.val());
//        });
    };
};
