let message;

function quicksort(arr , start , end, sortBy, direction){
    if(start >= end){
        return;
    }else{
        index = partition(arr , start , end, direction, sortBy);
        quicksort(arr , start , index-1, sortBy, direction);
        quicksort(arr, index+1 , end, sortBy, direction);
    }
}
function partition(arr , start , end, direction, sortBy){
    value = arr[end];
    pindex = start;
    console.log('direction:', direction)
    for(i = start;i<end; i++){
        console.log('Date: ', arr[i][sortBy])
        if(direction === 1){
            if(arr[i][sortBy]<value[sortBy]){
                swap(arr , i , pindex);
                pindex++;
            }
        }else{
            if(arr[i][sortBy]>value[sortBy]){
                swap(arr , i , pindex);
                pindex++;
            }
        }
    }
    swap(arr , end , pindex);
    return pindex;
}
function swap(arr , a , b){
    let tem1 = arr[a];
    let tem2 = arr[b];
    arr[a] = tem2;
    arr[b] = tem1;
}

async function extract(orders, sortBy, filter){
    let validSorts = ['timeRecieved_asc', 'timeRecieved_dsc'];
    isValidSort = false;
    for(i=0; i<validSorts.length; i++){
        if(sortBy === validSorts[i]){
            isValidSort = true;
            break;
        }
    }
    if(isValidSort){
        console.log('valid sort')
        let sort = sortBy.split('_')[0];
        let directionString = sortBy.split('_')[1];
        let direction;
        if(directionString === 'dsc'){
            direction = -1;
        }else{
            direction = 1;
        }
        quicksort(orders, 0, orders.length-1, sort, direction);
        let filteredAndSortedorders = orders;
        if(filter){
            filteredAndSortedorders = [];
            for(i=0; i<orders.length; i++){
                if(orders[i].isConfirmed == filter){
                    filteredAndSortedorders.push(orders[i])
                }
            }
        }
        return filteredAndSortedorders;

    }else{
        message = 'Sorting is not valid';
        return;
    }
}

function getorders(User, Shop, Order){
    return async (req, res, next)=>{
        try {
            // if(req.query.Id){
            let result = {};
            let page = Number(req.query.page);
            let limit = Number(req.query.limit);
            let startIndex = (page-1)*limit;
            let endIndex = startIndex+limit;
            let sortBy = 'timeRecieved_dsc';
            let filter;
            if(req.query.sortBy){
                sortBy = req.query.sortBy;
            }
            if(req.query.filter){
                sortBy = 'date';
                // direction = -1;
                filter = req.query.filter;
            }
            // console.log('Page: ', page, 'Limit: ', limit, 'startIndex', startIndex, 'Endindex: ', endIndex);
            if(page>1){
                result.pre = {
                    page: page-1,
                    limit: limit
                }
            }
            let targetedShop = await Shop.findById(req.user.sellerID).populate('recievedOrders.OrderID').exec();
            let orders = targetedShop.recievedOrders;
            console.log(req.query)
            // console.log('This is : 104: ' , orders);
            if(orders.length > endIndex){
                result.next = {
                    page: page+1,
                    limit: limit
                }
            }

            let finalorders = await extract(orders, sortBy, filter);
            for(i=0; i<startIndex+1; i++){
                finalorders.shift(startIndex);
            }
            finalorders.length = limit;
            result.orders = finalorders;
            console.log(finalorders);
            req.orders = result;
            // }else{
            //     res.send('Id is required')
            // }
            next()
        } catch (error) {
            console.log(error);
            res.send('Something went wrong')
        }
    }
}

module.exports = getorders;