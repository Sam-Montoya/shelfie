module.exports = {

    getBins: (request, response) => {
        const DB = request.app.get('DB');

        DB.getBins(request.params.shelfId).then(bins => {
            response.status(200).send(bins)
        }).catch(() => 
            response.status(200).send('Could not get bins.'));
    },

    getOneBin: (request, response) => {
        const DB = request.app.get('DB');

        DB.getBin(request.params.id).then(bin => {
            response.status(200).send(bin)
        }).catch(() => response.status(500).send('Could not get bin'));
    },

    updateBin: (request, response) => {
        const DB = request.app.get('DB');
        let {itemName, itemPrice} = request.body;

        DB.updateBin([itemName, itemPrice, request.params.id]).then(bin => {
            response.status(200).send('Bin has been updated.');
        }).catch(() => response.status(500).send('Could not update that bin.'));
    }
}