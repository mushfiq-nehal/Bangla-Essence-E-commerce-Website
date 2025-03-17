import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { registerUser } from "@/store/auth-slice";

// The original 3 fields from registerFormControls
import { registerFormControls } from "@/config";

const initialState = {
  userType: "buyer", // default
  userName: "",
  email: "",
  password: "",
  address: "",
  phoneNumber: "",
  nidNumber: "",
  tinNumber: "",
  agreeTerms: false,
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function onSubmit(e) {
    e.preventDefault();
    // Currently, these extra fields are "dummy," but they're in formData.
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({ title: data.payload.message });
        navigate("/auth/login");
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>

      {/* One parent form handles everything */}
      <form onSubmit={onSubmit} className="space-y-4">
        {/* Buyer vs Seller radio */}
        <div className="flex items-center justify-center space-x-4">
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="userType"
              value="buyer"
              checked={formData.userType === "buyer"}
              onChange={() => setFormData({ ...formData, userType: "buyer" })}
            />
            <span>Register as Buyer</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="userType"
              value="seller"
              checked={formData.userType === "seller"}
              onChange={() => setFormData({ ...formData, userType: "seller" })}
            />
            <span>Register as Seller</span>
          </label>
        </div>

        {/* The 3 original fields (userName, email, password) */}
        {/* Pass buttonText={null} so we don't get a second button here */}
        <CommonForm
          formControls={registerFormControls}
          formData={formData}
          setFormData={setFormData}
          onSubmit={() => {}}
          buttonText={null}
        />

        {/* Seller-only fields (dummy) */}
        {formData.userType === "seller" && (
          <div className="space-y-3">
            {/* Address */}
            <div>
              <label className="block mb-1 font-medium">Address</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                placeholder="1234 Example Rd"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                placeholder="01XXX-XXXXXX"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </div>

            {/* NID */}
            <div>
              <label className="block mb-1 font-medium">NID Number</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                placeholder="NID Number"
                value={formData.nidNumber}
                onChange={(e) =>
                  setFormData({ ...formData, nidNumber: e.target.value })
                }
              />
            </div>

            {/* TIN */}
            <div>
              <label className="block mb-1 font-medium">TIN Number</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                placeholder="TIN Number"
                value={formData.tinNumber}
                onChange={(e) =>
                  setFormData({ ...formData, tinNumber: e.target.value })
                }
              />
            </div>

            {/* Agree to Terms */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={formData.agreeTerms}
                onChange={(e) =>
                  setFormData({ ...formData, agreeTerms: e.target.checked })
                }
              />
              <label htmlFor="agreeTerms" className="flex items-center">
                I agree to the{" "}
                <a
                  href="https://drive.google.com/file/d/1reel_KKb6tbEPxysDhbUyWSDQSMfgZ_5/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-primary ml-1"
                >
                  Terms &amp; Conditions
                </a>
              </label>
            </div>
          </div>
        )}

        {/* Single "Sign Up" button at the bottom */}
        <button
          type="submit"
          className="w-full mt-2 py-2 px-4 rounded bg-orange-700 hover:bg-orange-800 text-white"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default AuthRegister;
