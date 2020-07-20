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

async function extract(reviews, sortBy, filter){
    let validSorts = ['date_asc', 'date_dsc', 'rating_asc', 'rating_dsc'];
    isValidSort = false;
    for(i=0; i<validSorts.length; i++){
        if(sortBy === validSorts[i]){
            isValidSort = true;
            break;
        }
    }
    if(isValidSort){
        let sort = sortBy.split('_')[0];
        let directionString = sortBy.split('_')[1];
        let direction;
        if(directionString === 'dsc'){
            direction = -1;
        }else{
            direction = 1;
        }
        quicksort(reviews, 0, reviews.length-1, sort, direction);
        let filteredAndSortedReviews = reviews;
        if(filter){
            filteredAndSortedReviews = [];
            for(i=0; i<reviews.length; i++){
                if(reviews[i].rating == filter){
                    filteredAndSortedReviews.push(reviews[i])
                }
            }
        }
        return filteredAndSortedReviews;

    }else{
        message = 'Sorting is not valid';
        return;
    }
}

function getReviews(Product){
    return async (req, res, next)=>{
        try {
            if(req.query.Id){
            let result = {};
            let page = Number(req.query.page);
            let limit = Number(req.query.limit);
            let startIndex = (page-1)*limit;
            let endIndex = startIndex+limit;
            let sortBy = 'date';
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
            let targetedProduct = await Product.findById(req.query.Id).select('reviews');
            let reviews = targetedProduct.reviews;
            console.log(req.query)
            console.log('reviews: ' , reviews);
            if(reviews.length > endIndex){
                result.next = {
                    page: page+1,
                    limit: limit
                }
            }

            let finalReviews = await extract(reviews, sortBy, filter);
            for(i=0; i<startIndex+1; i++){
                finalreviews.shift(startIndex);
            }
            finalreviews.length = limit;
            result.reviews = finalReviews;
            req.reviews = result;
            }else{
                res.send('Id is required')
            }
            next()
        } catch (error) {
            console.log(error);
            res.send('Something went wrong')
        }
    }
}

module.exports = getReviews;