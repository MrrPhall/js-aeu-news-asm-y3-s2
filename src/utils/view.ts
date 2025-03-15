export const viewFormater = (e: number) => {
    if (e < 1000) {
        return e.toString();
    }else if(e < 1000000) {
        return (e / 1000).toFixed(1) + 'K';
    }else if(e < 1000000000){
        return (e / 1000000).toFixed(1) + 'M';
    }else{
        return (e / 1000000000).toFixed(1) + 'B';
    }
}