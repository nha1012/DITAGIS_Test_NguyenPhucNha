import * as ActionTypes from '../types';
import * as RestApi from '../../api/restApi'

export const fetchProduct = () => (dispatch) => {

	dispatch(amiibosLoading());

	return RestApi.getAmiibos()
		.then(response => {
			const allProduct = response.data.map(a => {
				return ({
					...a,
					price: (Math.floor(Math.random() * (4501 - 1499)) + 1499) * 10
				})
			});
			dispatch(amiibosFetch(allProduct))
		})
		.catch(error => dispatch(amiibosFailed(error.message)));
}

const amiibosLoading = _ => ({
	type: ActionTypes.PRODUCT_LOADING
});

const amiibosFailed = (errmess) => ({
	type: ActionTypes.PRODUCT_FAILED,
	payload: errmess
});

const amiibosFetch = (allProduct) => ({
	type: ActionTypes.PRODUCT_FETCHED,
	payload: allProduct
});