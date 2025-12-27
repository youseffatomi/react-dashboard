import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router";

export default function Signin() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">ایمیل یا نام کاربری</Label>
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">رمز عبور</Label>
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">مرا به یاد داشته باش</Label>
      </div>
      <Button type="submit">ورود</Button>
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
