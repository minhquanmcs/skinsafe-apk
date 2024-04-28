//AUTH
export interface LoginParams {
  phone: string | number;
  password: string;
}
export interface CreatePasswordParams {
  phone: string | number;
  otp: string | number;
  password: string;
  re_password: string;
}
export interface ActivePhoneParams {
  phone: string | number;
  otp: string | number;
}
export interface OTPParams {
  phone: string | number;
}
export interface ChangePasswordParams {
  phone: string | number;
  old_password: string;
  new_password: string;
  confirm_password: string;
}
export interface UpdateProfileParams {
  phone: string | number;
  username: string;
  email: string;
  fullname: string;
  birthday: string;
  passport: string;
}

//ADDRESS
export interface CreateNewAddressParams {
  name: string;
  phone: string;
  address_full: string;
  street: string;
  ward_id: string;
  district_id: string;
  province_id: string;
  default: 0 | 1; // 1 is default
  home_company: 1 | 2; //1 - home, 2 - company
}

export interface UpdateAddressParams extends CreateNewAddressParams {
  id: string;
}

export interface DeleteAddressParams {
  id: string;
}

export interface UpdateDefaultAddressParams {
  id: string;
}

export interface GetDistrictParams {
  province_id: string;
}

export interface GetWardParams {
  district_id: string;
}

// pet
export interface GetPetParams {
  page: string | number;
  size: string | number;
}
export interface CreateNewPetParams {
  name: string;
  species_id: string;
  age: string;
  sex: string;
  weight: string;
  description: string;
  avatar: string;
}
export interface GetPetDetailsParams {
  id: string;
}
export interface UpdatePetParams {
  id: string;
  formData: FormData;
}
export interface CreatePetParams {
  formData: FormData;
}
export interface CreateOrderParams {
  note: string;
  name: string;
  phone: string;
  street: string;
  cart_id: string;
  address_full: string;
  ward_id: string | number;
  district_id: string | number;
  province_id: string | number;
}

export interface GetDetailOrderParams {
  id: string;
}

export interface GetListOrderParams {
  page?: number;
  size?: number;
  status: string;
  type_product?: null | 1; //null - đơn  hàng sp, 1 - đơn dịch vụ
}

export interface UpdateStatusOderParams {
  id: string;
  status: string;
}

export interface GetDetailShopParams {
  id: string;
  user_id?: string;
}

export interface FollowShopParams {
  shop_id: string;
}

export interface GetListShopParams {
  page: number;
  per_page: number;
  keyword?: string;
  user_id?: string;
  follow?: 1 | 2; //1 - follow, 2 - chưa follow
}

export interface GetListFavoriteProductParams {
  per_page: number;
  page: number;
  type?: null | 1; //null - sản phẩm, 1 - dịch vụ
}

export interface GetListBoughtProductParams {
  per_page: number;
  page: number;
}

export interface GetListProductParams {
  lang_id?: 1;
  category_id?: string; //lọc ra các sản phẩm của category_id
  keyword?: string;
  page: number;
  per_page?: number;
  sort?: 'view' | 'qty_sell' | 'percentage_sale' | 'id' | null; //mặc định theo ID từ nhỏ đến lớn, ngoài ra sắp xếp theo view, qty_sell, id, percentage_sale từ lớn đến nhỏ
  shop_id?: string; //lọc ra các sản phẩm của shop_id
  user_id?: string;
  nation_id?: string; //lọc theo quốc gia
  price_sale?: null | 1; //chỉ lọc ra các sản phẩm đang giám giá
  is_auth?: null | 1; //chỉ lọc ra các sản phẩm chính hãng
  price_from?: number; //nếu rỗng thì sẽ lọc ra các sp có giá <= price_to
  price_to?: number; //nếu rỗng thì sẽ lọc ra các sp có giá >= price_from
  type?: null | 1 | 'all'; //null - sản phẩm, 1 - dịch vụ, all - tat ca
  random?: null | 1; //sắp xếp random
}

export interface GetListWatchedProductParams {
  page: number;
  per_page: number;
  user_id?: string;
  shop_id?: string;
  type?: null | 1; //null - sản phẩm, 1 - dịch vụ
}

export interface GetListVoucherParams {
  page: number;
  per_page: number;
  is_admin?: 0 | 1;
}

export interface GetListNearByShop {
  lat: number;
  lng: number;
  distance: number;
}

export interface GetDetailProductParams {
  id: string;
  user_id?: string;
}

export interface AddFavoriteParams {
  product_id: string;
}

export interface RemoveFavoriteParams {
  product_id: string;
}

export interface GetListNotificationParams {
  user_id?: string;
  page: number;
  per_page?: number;
}

export interface GetDetailNotificationParams {
  id: string;
}
