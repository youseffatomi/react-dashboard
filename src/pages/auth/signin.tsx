import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { Link } from "react-router";
import { Login } from "../../API/Auth";
import toast from "react-hot-toast";

type UserLogin = Record<string, never> | { username: string; password: string };

export default function Signin() {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validate(values) {
      const err: Partial<UserLogin> = {};

      if (!values.username) {
        err.username = "نام کاربری نمیتواند خالی باشد";
      }
      if (!values.password) {
        err.password = "رمز  عبور نمیتواند خالی باشد";
      }

      return err;
    },

    onSubmit: async (values) => {
      const req = Login(values.username, values.password);

      await toast.promise(req, {
        loading: "درحال ارسال",
        error: "نام کاربری یا رمز عبور اشتباه است",
        success: "ورود با  موفقیت انجام شد",
      });
    },
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-2 place-items-center text-gray-500">
        <div>
          <span>نام کاربری :</span>
          <span>emilys</span>
        </div>
        <div>
          <span>رمز عبور :</span>
          <span>emilyspass</span>
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username">
            ایمیل یا نام کاربری
            <span className="mr-3 inline-block text-red-400">
              {formik.errors.username}
            </span>
          </Label>
        </div>
        <TextInput
          id="username"
          name="username"
          placeholder="name@flexo.com"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">
            رمز عبور
            <span className="mr-3 inline-block text-red-400">
              {formik.errors.password}
            </span>
          </Label>
        </div>
        <TextInput
          id="password1"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">مرا به یاد داشته باش</Label>
      </div>
      <Button type="submit" disabled={formik.isSubmitting}>
        ورود
      </Button>
      <div className="flex items-center justify-between gap-2">
        <hr className="w-full border-gray-300" />
        <span>یا</span>
        <hr className="w-full border-gray-300" />
      </div>
      <Button as={Link} to="/auth/signup" color="third" outline>
        ثبت نام
      </Button>
    </form>
  );
}
