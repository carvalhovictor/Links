import { connect } from "react-redux";
import { getToken } from "../../helpers/account";
import { getTokenExpire } from "../../helpers/jwt";
import { getFreshToken } from "../../actions/AccountActions";
import { useEffect } from "react";

const TokenRefresher = ( {getFreshToken} ) => {
	const TRESHOLD = 30;
	const calculate = () => {
		const token = getToken();
		const expires = getTokenExpire(token);
		const secondsToExpire = expires - (Date.now() / 1000);

		return secondsToExpire;
	}
	
	useEffect(() => {
		const secondsToExpire = calculate() - TRESHOLD;
		const id = setTimeout(getFreshToken, secondsToExpire * 1000);
		return () => clearTimeout(id);
	}, [getFreshToken]);

	//setInterval(calculate, 1000)
	return null;
};

const mapStateToProps = state => {
	return { account: state.account.account };
}

export default connect(mapStateToProps, {getFreshToken})(TokenRefresher);

// const readableTime = secondsToReadableTime(secondsToExpire);