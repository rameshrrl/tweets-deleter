export const givenDaysAgo = (days) => {

    const currentDate = new Date();

    const calculatedTime = currentDate.setDate(currentDate.getDate() - days);

    let timestamp =  new Date(calculatedTime).toISOString();

    return `${timestamp.split('.')[0]}Z`;
}