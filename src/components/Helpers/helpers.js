import moment from 'moment';

export const getDateAgo = (data) => {
    return moment(data).fromNow();
}