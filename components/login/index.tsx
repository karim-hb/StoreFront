import { get, patch, post, responseValidator } from "@/scripts/api";
import { checkingNumber, fNom, noSpace } from "@/scripts/validation";
import React, { useEffect, useState } from "react";
import { API } from "../api";
import OtpInput from "react-otp-input";
import { Button } from "@mui/material";
import Loading1 from "../utility/loading";
import { authToken } from "@/scripts/storage";
import { useDispatch, useSelector } from "react-redux";
import { addUserDataAction } from "redux/action/action";
const Login = (props: any) => {
  const { initialMinute = 2, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [disabled, setDisabled] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [error, setError] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<number>(0);
  const [otp, setOtp] = useState<any>({});
  const [userInfo, setUserInfo] = useState<any>({});
  const [fakePassword, setFakePassword] = useState<string>("");
  const handleValidate = (e: any) => {
    noSpace(e);
    checkingNumber(e);
  };
  const dispatch: any = useDispatch();
  const handleSignIn = () => {
    if (phoneNumber?.length === 11 && phoneNumber.slice(0, 2) === "09") {
      setError({});
      setLoading(true);
      get(API.login.otp, {
        receiver: phoneNumber,
        channel: "Phone",
      }).then((res: any) => {
        if (responseValidator(res) && res.data) {
          setOtp({ ...otp, requestId: res.data.request_id });
          setFakePassword(res.data.password);
          setLoading(false);
          setState(1);
          setMinutes(2);
        } else {
          setError({ top: "اطلاعات وارد شده صحیح نمی باشد مجدد تلاش کنید" });
          setLoading(false);
        }
      });
    } else {
      setError({ phone: "شماره تلفن وارد شده معتبر نیست" });
    }
  };
  const handleOtp = () => {
    setLoading(true);
    post(API.login.otp, {
      request_id: otp.requestId,
      password: otp.code,
      receiver: phoneNumber,
    }).then((res: any) => {
      if (responseValidator(res) && res.data) {
        if (res.data.created) {
          authToken.set(res.data.token);
          setState(2);
          setLoading(false);
        } else {
          authToken.set(res.data.token);
          get(API.user.userData).then((res: any) => {
            if (responseValidator(res) && res.data) {
              props.closeLogin(true);
              dispatch(addUserDataAction(res.data));
              setLoading(false);
            } else {
              setError({
                top: "اطلاعات وارد شده صحیح نمی باشد مجدد تلاش کنید",
              });
              setLoading(false);
            }
          });
        }
      } else {
        setError({ top: "اطلاعات وارد شده صحیح نمی باشد مجدد تلاش کنید" });
      }
    });
  };
  const handleUserdata = () => {
    setLoading(true);
    patch(API.user.userData, {
      first_name: userInfo.name,
      last_name: userInfo.lastname,
    }).then((res: any) => {
      if (responseValidator(res) && res.data) {
        props.closeLogin(true);
        dispatch(addUserDataAction(res.data));
        setLoading(false);
      } else {
        setError({ top: "اطلاعات وارد شده صحیح نمی باشد مجدد تلاش کنید" });
      }
    });
  };
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  useEffect(() => {
    if (state === 0) {
      if (phoneNumber.length === 11) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    } else if (state === 1) {
      if (otp?.code?.length === 4) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    } else if (state === 2) {
      if (
        !userInfo?.name ||
        !userInfo?.lastname ||
        userInfo?.name?.length < 3 ||
        userInfo?.lastname?.length < 2
      ) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }, [phoneNumber, state, otp, userInfo]);
  return (
    <div className="flex flex-col justify-between p-5 h-[300px]">
      <div className="flex justify-between items-center">
        <span className="text-md font-bold text-gray-700">ورود یا عضویت</span>
        {error.top && <span className="text-xs text-red-500">{error.top}</span>}
        <span
          className="material-icons-outlined text-lg cursor-pointer"
          onClick={() => props.closeLogin(true)}
        >
          close
        </span>
      </div>
      {state === 0 ? (
        <div className="flex flex-col">
          <span className="text-xs font-bold text-gray-600">
            شماره تلفن‌همراه
          </span>
          <input
            onInput={(e) => handleValidate(e)}
            onChange={(e) => setPhoneNumber(fNom(e.target.value))}
            className={`outline-0 border ${
              error?.phone ? "border-red-300" : "border-gray-400"
            } rounded-md w-full h-[45px] my-2 p-2 text-sm`}
            autoFocus
          />
          <div className="flex justify-between items-center">
            <span className="text-xs  text-gray-500">
              شماره با ۰۹ شروع می‌شود
            </span>
            <span className="text-xs  text-red-400">{error?.phone}</span>
          </div>
        </div>
      ) : state === 1 ? (
        <div className="flex flex-col">
          <span className="text-sm font-bold text-gray-600">
            کد ارسالی را وارد کنید : {fakePassword}
          </span>
          <div style={{ direction: "ltr" }}>
            <OtpInput
              isDisabled={minutes === 0 && seconds === 0}
              separator={
                <span>
                  <strong>-</strong>
                </span>
              }
              value={otp.code}
              onChange={(code: any) => setOtp({ ...otp, code: code })}
              inputStyle={{
                width: "3rem",
                height: "3rem",
                margin: " 1rem",
                fontSize: "2rem",
                borderRadius: 4,
                border: "1px solid rgba(0,0,0,0.3)",
                direction: "rtl",
                float: "left",
              }}
            />
          </div>

          {seconds !== 0 || minutes !== 0 ? (
            <span className="text-xs  text-gray-500">
              تا ارسال مجدد : {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          ) : (
            <div className="flex">
              <span className="text-xs  text-gray-500">
                کد را دریافت نکرده اید؟
              </span>
              <span
                onClick={handleSignIn}
                className="text-xs text-scale-animation  text-blue-600 cursor-pointer mr-3"
              >
                ارسال مجدد
              </span>
            </div>
          )}
        </div>
      ) : (
        state === 2 && (
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-600">نام</span>
            <input
              onInput={(e) => noSpace(e)}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
              className={`outline-0 border "border-gray-400"
              rounded-md w-full h-[45px] my-2 p-2 text-sm`}
              autoFocus
            />
            <span className="text-xs font-bold text-gray-600">
              نام خانوادگی
            </span>
            <input
              onInput={(e) => noSpace(e)}
              onChange={(e) =>
                setUserInfo({ ...userInfo, lastname: e.target.value })
              }
              className={`outline-0 border "border-gray-400"
              rounded-md w-full h-[45px] my-2 p-2 text-sm`}
            />
          </div>
        )
      )}

      <button
        disabled={disabled}
        className={`w-full h-[50px] outline-none rounded-md border-none text-white ${
          disabled ? " bg-gray-300" : "bg-[#ff00a6]"
        } `}
        onClick={() => {
          if (state === 0) handleSignIn();
          else if (state === 1) handleOtp();
          else if (state === 2) handleUserdata();
        }}
      >
        {loading ? <Loading1 /> : "ادامه"}
      </button>
    </div>
  );
};

export default Login;
