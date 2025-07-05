export async function Update(coll, filter, update, options={}) {
        const r = await coll.updateOne(filter, update, options);
        return r;
}