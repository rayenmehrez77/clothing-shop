import React from "react";
import "./Shop.scss";
import CollectionOverview from "../../Components/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollection } from "../../redux/shop/shop.actions";
import WithSpinner from "../../Components/WithSpinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class Shop extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    // ***** Method 1: Regular promise ****
    collectionRef.get().then((snapShot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });
    // ***** Method2: Observable *****
    // collectionRef.onSnapshot(async (snapShot) => {
    //   const collectionMap = convertCollectionsSnapshotToMap(snapShot);
    //   updateCollections(collectionMap);
    //   this.setState({ loading: false });
    // });
    // ***** Method3: Fetching from firebase API ************
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-clothing-c09ed/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollection(collectionMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
