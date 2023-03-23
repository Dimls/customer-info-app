import React from "react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  Controller,
  useForm
} from "react-hook-form";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Box
} from "@mui/material";
import moment from "moment";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  CustomerInfoServiceDialogProps,
  CustomerInfoServiceProps
} from "../types/types";

const CustomerInfoServiceDialog = ({
  open,
  onClose
}: CustomerInfoServiceDialogProps) => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<CustomerInfoServiceProps>({});

  const handleFormSubmit = (data: CustomerInfoServiceProps) => {
    onClose();
    reset();
  };

  console.log(errors.date);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Service details</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter the code, description, date and the cost of the service
          below.
        </DialogContentText>

        <form>
          <Box display="flex" flexDirection="column" mt={3} gap={3} width="50%">
            <Controller
              name="code"
              control={control}
              defaultValue={""}
              rules={{
                required: "Please add the service code"
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="code"
                  label={"Code"}
                  inputProps={{ maxLength: 4 }}
                  error={errors.code !== undefined}
                  helperText={
                    errors.code &&
                    `${
                      (errors["code"] as DeepMap<FieldValues, FieldError>)
                        ?.message
                    }`
                  }
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="description"
                  label={"Description"}
                  inputProps={{ maxLength: 50 }}
                />
              )}
            />
            <Controller
              control={control}
              name="date"
              defaultValue={""}
              rules={{
                required: "Please select a service date"
              }}
              render={({ field: { onChange, value } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date"
                    value={value}
                    onChange={onChange}
                    slotProps={{
                      textField: {
                        error: errors.date !== undefined,
                        helperText:
                          errors.date &&
                          `${
                            (errors["date"] as DeepMap<FieldValues, FieldError>)
                              ?.message
                          }`
                      }
                    }}
                  />
                </LocalizationProvider>
              )}
            />
            <Controller
              name="cost"
              control={control}
              defaultValue={""}
              rules={{
                required: "Please add the service cost in $"
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="cost"
                  label={"Cost in $"}
                  variant="outlined"
                  error={errors.cost !== undefined}
                  helperText={
                    errors.cost &&
                    `${
                      (errors["cost"] as DeepMap<FieldValues, FieldError>)
                        ?.message
                    }`
                  }
                />
              )}
            />
          </Box>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleSubmit(handleFormSubmit)}>Save</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerInfoServiceDialog;
