// login code 


// useEffect(() => {
    //   let user = auth.currentUser;

    //    const docRef = doc(db, "users", user.uid);
    //   const docSnap =  getDoc(docRef);

    //    if (docSnap.exists()) {
    //      const userData = docSnap.data();
    //      console.log("Document data:", userData);

    //      // localStorage.setItem("user", userData.username);
    //    } else {
    //      // doc.data() will be undefined in this case
    //      console.log("No such document!");
    //    }
    //   auth.onAuthStateChanged((authUser) => {
    //     if (authUser) {
    //       dispatch(
    //         login({
    //           id: authUser.uid,
    //           name: authUser.displayName
    //             ? authUser.displayName
    //             : authUser.email,
    //           lastsignIn: authUser.metadata.lastSignInTime,
    //           verified: String(authUser.emailVerified),
    //           pic: authUser.photoURL
    //             ? authUser.photoURL
    //             : "https://lh3.googleusercontent.com/ogw/ADea4I5bHBJbpIvco4Yh1ARth7_gu4dl_QnpyDAU0NW8=s32-c-mo",
    //         })
    //       );
    //     } else {
    //       dispatch(logout());
    //     }
    //   });
    // }, [dispatch]);


    // const userData = async(Userid) =>{

    //        getDoc(doc(db, "users", Userid)).then((docSnap) => {
    //          if (docSnap.exists()) {
              
    //           const userD=docSnap.data()
    //            console.log("Document data:", userD);
    //          } else {
    //            console.log("No such document!");
    //          }
    //        });
    // }