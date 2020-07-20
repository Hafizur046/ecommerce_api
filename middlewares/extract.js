// let cats = {
//     schemaIndex: '1',
//     cats: [
//         {
//             catname: 'Grocery',
//             subcats: [
//                 {
//                     catname: 'Dry Foods',
//                     subcats: [
//                         {
//                             catname: 'Bengali',
//                             features: [
//                                 {
//                                     fieldname: 'Brand',
//                                     options: [
//                                         'Minicate',
//                                         '28'
//                                     ]
//                                 },
//                                 {
//                                     fieldname: 'Product',
//                                     options: [
//                                         'Chal',
//                                         'Dal',
//                                         'Ata'
//                                     ]
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// }
function extractCats(cats, isFirst){
    if(isFirst){
        console.log(cats[0])
        let temp = [];
            console.log('length:' , cats.length)
        for(i=0; i<cats.length; i++){
            temp[i] = cats[i];
            temp[i] = temp[i]+extractCats(cats[i+1], false);
        }
        return temp;
    }else{
        let temp = '';
        if(cats){
            for(i=0; i<cats.length; i++){
                temp = temp+'>'+cats[i].catname+extractCats(cats[i].subcats, false);
            }
            return temp;
        }else{
            return '';
        }
    
    }
}

module.exports = extractCats;