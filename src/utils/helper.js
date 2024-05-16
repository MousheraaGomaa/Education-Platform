const objectToFormData = (obj)=>{
    const formData = new FormData();
    Object.keys(obj).forEach((key)=>{
        if(obj.hasOwnProperty(key)){
            formData.append( key, obj[key] );
        }
    });
    return formData;
}

export { objectToFormData }