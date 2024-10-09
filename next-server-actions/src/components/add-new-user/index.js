"use client";

import { AddNewUserAction } from "@/actions";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  addNewUserFormControls,
  addNewUserFormInitialState,
} from "@/utilities";
import { useState } from "react";

function AddNewUser() {
  const [openPopup, setOpenPopup] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    addNewUserFormInitialState
  );

  console.log(addNewUserFormData);

  function handleSaveButtonValid() {
    return Object.values(addNewUserFormData).every(
      (value) => value.trim() !== ""
    );
  }

  async function handleAddNewUserAction() {
    const result = await AddNewUserAction(addNewUserFormData);
    console.log(result);
  }

  return (
    <div>
      <Button onClick={() => setOpenPopup(true)}>Add New user</Button>
      <Dialog
        open={openPopup}
        onOpenChange={() => {
          setOpenPopup(false);
          setAddNewUserFormData(addNewUserFormInitialState);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <form action={handleAddNewUserAction} className="grid gap-4 py-4">
            {addNewUserFormControls.map((controlItem) => (
              <div className="mb-5" key={controlItem.name}>
                <Label htmlFor={controlItem.name} className="text-right">
                  {controlItem.label}
                </Label>
                <Input
                  id={controlItem.name}
                  name={controlItem.name}
                  placeholder={controlItem.placeholder}
                  className="col-span-3"
                  type={controlItem.type}
                  value={addNewUserFormData[controlItem.name]}
                  onChange={(e) =>
                    setAddNewUserFormData({
                      ...addNewUserFormData,
                      [controlItem.name]: e.target.value,
                    })
                  }
                />
              </div>
            ))}
            <DialogFooter>
              <Button disabled={!handleSaveButtonValid()} type="submit">
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default AddNewUser;
