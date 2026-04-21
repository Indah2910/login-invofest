import { useForm } from "react-hook-form";
import InputText from "../components/ui/InputText";
import InputPassword from "../components/ui/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";
import { Select } from "../components/ui/Select"
import { Textarea } from "../components/ui/Textarea"

type FormData = {
  nama: string;
  email: string;
  password: string;
  password_confirm: string;
};

const schema = z.object({
  nama: z.string().min(1, "Nama harus diisi"),
  email: z.string().min(1, "Email tidak valid"),
  password: z.string().min(8, "Minimal 8 karakter"),
  password_confirm: z.string().min(8, "Minimal 8 karakter"),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/** Nama **/}
        <InputText
          label="Nama"
          nama="nama"
          register={register}
          error={errors.nama?.message}
        />

        {/** Email **/}
        <InputText
          label="Email"
          nama="email"
          register={register}
          error={errors.email?.message}
        />

        {/** Password **/}
        <InputPassword
          label="Password"
          nama="password"
          register={register}
          error={errors.password?.message}
        />

        {/** Confirm Password **/}
        <InputPassword
          label="Confirm Password"
          nama="password_confirm"
          register={register}
          error={errors.password_confirm?.message}
        />

        <Textarea
          label="Bio"
          name="bio"
          register={register}
        />

        <Select
          label="Event"
          name="event"
          register={register}
          options={[
            { label: "Workshop AI", value: "ai"},
            { label: "Invofest", value: "invofest"}
          ]}
        />

        {/** Submit Button **/}
        <div>
          <Button type="submit" label="Register" variant="primary" />
        </div>
      </form>
    </div>
  );
}