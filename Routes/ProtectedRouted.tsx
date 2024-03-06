



// const useAuth = () =>{

//     let user: any

//     const _user = localStorage.getItem("user");
//     if(user){
//       return {
//         auth:true,
//         role:user.role
//       }
//     }
//     else{
//       return {
//       auth: false,
//       role:null
//       }
//     }
//   }

//   type ProtectedRouteType = {
//     roleRequired?: 'CUSTOMER' | 'SERVICE PROVIDER'
//   }


//   const ProtectedRoutes = (props:ProtectedRouteType) => {

//     const {auth, role} = useAuth();
//     //IF ROLE REQUIRED EXISTS

//     if(props.roleRequired){
//        return auth ? props.roleRequired===role?(""):("");
//     }
//     else{

//     }


// }
// export default useAuth;