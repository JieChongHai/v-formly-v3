import type { Meta } from "@/types/meta";
import type { AppContext } from "vue";
import { BaseMeta } from "./base.meta";
class StringMeta extends BaseMeta {
  public open;
  constructor(appContext: AppContext, state: any, id: string, meta: Meta) {
    super(appContext, state, id, meta);

    if (this.meta) {
      this.open = (this.meta.ui && this.meta.ui.open) || false;
    }
  }

  initValue() {
    if (this._initMetaValue) {
      this.value.value = this._initMetaValue;
    } else if (this.meta.default) {
      this.value.value = this.meta.default;
    }
  }

  setValue(val: any) {
    this._value.value = val || undefined;
  }
}

export { StringMeta };
